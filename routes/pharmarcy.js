module.exports = pharmarcy;

function pharmarcy(app,request,gMapClient){
    app.get('/pharmacy/check',(req,res)=>{
        // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
        // 
        
        var w = req.query.w;
        var h = req.query.h;

        var radius = "500";

        var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
        var location = "location="+w+","+h+"&";
        var type = "&type=pharmacy";
        var key="&key=AIzaSyC-GmMkR9yIm1c3dtO1Y-gzbHGWbxEPyAk";

        var queryUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"+location+"radius=500"+type+key;

        console.log(queryUrl);
        request(queryUrl,(err,response,html)=>{
            if(err) throw err;
            res.send(html);
        });
    });
 }
