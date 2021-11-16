var Twitter = function() {
    this.twitterList = new Map()
    this.followList = new Map()
    this.ownRepo = new Map()
    this.timeLine = new Array()
    this.followedList = new Map()
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.timeLine.push(tweetId)
    if(!this.twitterList.has(userId)){
        let tweetList = new Array;
        tweetList.unshift(tweetId)
        this.twitterList.set(userId,tweetList)
    }else{
        let tweetList= this.twitterList.get(userId)
        tweetList.unshift(tweetId)
        if(tweetList.length > 10){
            tweetList.pop()
        }
        this.twitterList.set(userId,tweetList)
    }

    if(this.followList.has(userId)){
        let list = this.followList.get(userId)
        for(let i = 0;i<list.length;i++){
            let tweetList = this.twitterList.has(list[i])?this.twitterList.get(list[i]):[]
            tweetList.unshift(tweetId)
            if(tweetList.length > 10){
                tweetList.pop()
            }
            this.twitterList.set(list[i],tweetList)
        }
    }

    if(!this.ownRepo.has(userId)){
        let list = new Array()
        list.push(tweetId)
        this.ownRepo.set(userId,list)
    }else{
        let list = this.ownRepo.get(userId)
        list.push(tweetId)
        this.ownRepo.set(userId,list)
    }
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if(this.twitterList.has(userId)){
        return this.twitterList.get(userId)
    }else{
        return []
    }
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(this.followList.has(followeeId)){
        let list = this.followList.get(followeeId)
        for(let i = 0; i<list.length;i++){
            if(list[i] == followerId){
                return
            }
        }
        if(this.followedList.has(followerId)){
            let followed = this.followedList.get(followerId)
            followed.push(followeeId)
            this.followedList.set(followerId,followed)
        }
        list.push(followerId)
        this.followList.set(followeeId,list)
    }else{
        let list = new Array()
        list.push(followerId)
        this.followList.set(followeeId,list)
        let followed = new Array()
        followed.push(followeeId)
        this.followedList.set(followerId,followed)
    }

    if(this.twitterList.has(followerId)){
        let list = this.twitterList.get(followerId)
        if(this.ownRepo.has(followeeId)){
            let ownTweet = this.ownRepo.get(followeeId)
            list = ownTweet.concat(list)
            let arr = new Array()
            for(let i = 0; i<this.timeLine.length;i++){
                for(let j = 0;j<list.length;j++){
                    if(this.timeLine[i] == list[j]){
                        arr.unshift(this.timeLine[i])
                    }
                }
            }
            if(arr.length>10){
                arr = arr.slice(0,10)
            }
            this.twitterList.set(followerId,arr)
        }
    }else{
        let list = new Array()
        if(this.ownRepo.has(followeeId)){
            let ownTweet = this.ownRepo.get(followeeId)
            list = ownTweet.concat(list)
            if(list.length>10){
                list.unshift(-(list.length-10))
            }
            this.twitterList.set(followerId,list)
        }
    }
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.followList.has(followeeId)){
        let list = this.followList.get(followeeId)
        for(let i = 0; i< list.length;i++){
            if(list[i] == followerId){
                list.splice(i,1)
                this.followList.set(followeeId,list)
            }
        }
    }else{
        return
    }
    if(this.followedList.has(followerId)){
        let followed = this.followedList.get(followerId)
        let newFollowed = new Array()
        for(let i = 0; i< followed.length;i++){
            if(followed[i] != followeeId){
                newFollowed.push(followed[i])
            }
        }
        this.followedList.set(followerId,newFollowed)
        let newTwitterList = this.ownRepo.has(followerId)?this.ownRepo.get(followerId):[]
        for(let i = 0; i<newFollowed;i++){
            if(this.ownRepo.has(newFollowed[i])){
                newTwitterList = newTwitterList.concat(this.ownRepo.get(newFollowed[i]))
            }
        }
        let arr = new Array()
        for(let i = 0; i<this.timeLine.length;i++){
            for(let j = 0;j < newTwitterList.length;j++){
                if(this.timeLine[i] == newTwitterList[j]){
                    arr.unshift(this.timeLine[i])
                }
            }
        }
        if(arr.length>10){
            arr = arr.slice(0,10)
        }
        this.twitterList.set(followerId,arr)
    }
};

var obj = new Twitter()
obj.postTweet(1,5)
var param_2 = obj.getNewsFeed(1)
obj.follow(1,2)
obj.postTweet(2,6)
var param_3 = obj.getNewsFeed(1)
obj.unfollow(1,2)
var param_4 = obj.getNewsFeed(1)

 
