var isRectangleCover = function (rectangles) {

    let leftBottom = [rectangles[0][0], rectangles[0][1]]
    let rightTop = [rectangles[0][2], rectangles[0][3]]
    var area = (rightTop[0] - leftBottom[0]) * (rightTop[1] - leftBottom[1])
    if (rectangles.length == 1) return area > 0
    area = 0;
    let s = new Set()
    for (let i = 0; i < rectangles.length; i++) {
        let rec = rectangles[i]
        if (rec[0] < leftBottom[0] || rec[1] < leftBottom[1]) {
            leftBottom[0] = rec[0]
            leftBottom[1] = rec[1]
        }
        if (rec[2] > rightTop[0] || rec[3] > rightTop[1]) {
            rightTop[0] = rec[2]
            rightTop[1] = rec[3]
        }
        let lb = rec[0]+','+rec[1]
        let rb = rec[2]+','+rec[1]
        let rt = rec[2]+','+rec[3]
        let lt = rec[0]+','+rec[3]
        s.has(lb)?s.delete(lb):s.add(lb)
        s.has(rb)?s.delete(rb):s.add(rb)
        s.has(rt)?s.delete(rt):s.add(rt)
        s.has(lt)?s.delete(lt):s.add(lt)
        area += (rec[2] - rec[0]) * (rec[3] - rec[1])
    }
    let maxArea = (rightTop[0] - leftBottom[0]) * (rightTop[1] - leftBottom[1])
    if(s.has(leftBottom[0]+','+leftBottom[1]) && s.has(rightTop[0]+','+rightTop[1])){
        return area == maxArea && s.size == 4
    }else{
        return false
    }
};

let rectangles = [[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]
isRectangleCover(rectangles)