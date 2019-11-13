# async/await, Promise



```javascript
// var getState = function (stateName){
    //     return new Promise(function(resolved, rejected){
    //         setTimeout(function(){
    //             connection.query('select state_pk from state where state_name = ?;', stateName, async function(err, res) {
    //                 if (err){
    //                     rejected(err)
    //                 }
    //                 else {
    //                     var statePk =  res[0].state_pk
    //                     resolved(statePk)
    //                 }
    //             })
    //         })
    //     })
    // }

    // var addCity = function (stateId, cityName){
    //     return new Promise(function(resolved, rejected){
    //         setTimeout(function(){
    //             connection.query('insert ignore into city(city_state, city_name) values (?, ?);', [stateId, cityName], async function(err, res) {
    //                 if (err){
    //                     rejected(err)
    //                 }
    //                 else {
    //                     var cityId = res.insertId;
    //                     resolved(cityId)
    //                 }
    //             })
    //         })
    //     })
    // }

    // var resDetail = function (dCity, dName, dAdr, dX, dY){
    //     return new Promise(function(resolved, rejected){
    //         setTimeout(function(){
    //             connection.query('insert into detail(detail_city, detail_name, detail_adr, detail_x, detail_y) values (?, ?, ?, ?, ?)', 
    //             [dCity, dName, dAdr, dX, dY], async function(err, res) {
    //                 if (err){
    //                     rejected(0)
    //                 }
    //                 else {
    //                     resolved('success')
    //                 }
    //             })
    //         })
    //     })
    // }

    // async function getAPI(idx){
    //     console.log(idx)
    //     var url = 'http://apis.data.go.kr/1741000/EarthquakeIndoors/getEarthquakeIndoorsList';
    //     var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + API_KEY; /* Service Key*/
    //     queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /* 호출문서 형식 */
    //     queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(`${idx}`); /* 페이지번호 */
    //     queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* 한 페이지 결과 수 */
    //     queryParams += '&' + encodeURIComponent('flag') + '=' + encodeURIComponent('Y'); /* 신규API */
    //     url += queryParams

    //     var response = await request(url);

    //     response = JSON.parse(response.body);
    //     response = response['EarthquakeIndoors'][1]['row'];

    //     await response.forEach(async (data) => {
    //         var dataState = data.ctprvn_nm
    //         var dataSgg_nm = data.sgg_nm
    //         var dataVt = data.vt_acmdfclty_nm
    //         var dataAdr = data.dtl_adres
    //         var dataX = data.xcord
    //         var dataY = data.ycord

    //         var statePk = await getState(dataState)
    //         var saveCity = await addCity(statePk, dataSgg_nm)

    //         console.log(statePk, saveCity)
    //         console.log(dataState, dataSgg_nm, dataVt, dataAdr, dataX, dataY)
    //         console.log('--------------------------------')
    //     })
    // }

    // await getAPI(1);
    // res.send("ok")
```



