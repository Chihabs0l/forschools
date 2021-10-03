require('dotenv').config()
const fs = require('fs')


const express = require('express')
const { url } = require('inspector')
const { urlencoded } = require('express')
const app = express()
const bodyParser = require('body-parser')


//read data function
function readData(filepath , cb) {
    fs.readFile(filepath , 'utf-8', (err , fileData) => {
        if(err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch (err) {
            return cb && cb(err)
        }
    })
}

//write data function
function insertMain(path , data) {
    fs.writeFile(path, JSON.stringify(data , null , 4), err => {
        if(err) {
            console.log(err);
        } else {
            console.log('DATA: ' , data , 'INSERTED SUCCESSFULLY!');
        }
    })
}


readData('./data/test.json' , (err , res) => {
    if(res) {
    let datadeletearray = []

        ;res['dersler']['Kuran'].forEach(element => {

            let i=0;
            let bool = true
            while(bool) {
                datadeletearray.push(element)
                if(i == element.length) {
                    console.log('yes');
                    bool = false;
                }
                i++
                console.log(datadeletearray);
            }
        });
        
        
    } if(err) {
        console.log(err);
    }
})


app.use(express.static('./'))



/*  others are algorithims
    return all functions
    host on python server to
*/


function insertToDataFile1() {
    let jsonpath = './data/kunu.json'
    readData(jsonpath , (req , data) => {
        if(data) {
            const urlencodedParser = bodyParser.urlencoded({extended:false})

            app.post('/InsertDataKunu=true', urlencodedParser, [
    
            ], (req , res) => {
                let newObj = `${req.body.select4}`
                let inputObj = `${req.body.userinput4}`
                let messageObj = `${req.body.message4}`
                switch(true) {
                    case newObj == 'Kuran':
                        data['dersler'][newObj][inputObj] = [messageObj]
                        break;
                    case newObj == 'Hitabet':
                        data['dersler'][newObj][inputObj] = [messageObj]
                        break;
                    case newObj == 'Akaid':
                        data['dersler'][newObj][inputObj] = [messageObj]
                        break;
                    case newObj == 'Arapca':
                        data['dersler'][newObj][inputObj] = [messageObj]
                        break;
                    case newObj == 'Tefsir':
                        data['dersler'][newObj][inputObj] = [messageObj]
                        break;
                    case newObj == 'Ingilizce':
                        data['dersler'][newObj][inputObj] = [messageObj]
                        break;
                    case newObj == 'Kimya':
                        data['dersler'][newObj][inputObj] = [messageObj]
                        break;
                    case newObj == 'Tarih':
                        data['dersler'][newObj][inputObj] = [messageObj]
                        break;
                    case newObj == 'Turkce':
                        data['dersler'][newObj][inputObj] = [messageObj]
                        break;
                    case newObj == 'Biyoloji':
                        data['dersler'][newObj][inputObj] = [messageObj]
                        break;
                    case newObj == 'Fizik':
                        data['dersler'][newObj][inputObj] = [messageObj]
                        break;
                    case newObj == 'Matematik':
                        data['dersler'][newObj][inputObj] = [messageObj]
                        break;
                    case newObj == 'Felsefe':
                        data['dersler'][newObj][inputObj] = [messageObj]
                        break;
                    default:
                        console.log('error');
                        break;
                    }
                    res.writeHead(200, {'Content-type':'text/html'});
                    fs.readFile('./index.html', null, (err , data) => {
                        if(err) {
                            res.writeHead(404)
                            res.write('File not found!')
                        } else {
                            res.write(data)
                        }
                        res.end()
                    })

                insertMain(jsonpath , data)
            })
        } if(req) {
            console.log(req);
        }
    })
}


//delete from kunu file
function deleteFromKunuFile() {

}



function deleteFromFileData() {
    //will delete data from select
    //get inpiuts beffore


    const urlencodedParser = bodyParser.urlencoded({extended:false})
    app.post('/DeleteDataTable=true' , urlencodedParser, [

    ], (req , res) => {
        let selectObj = `${req.body.select1}`
        let inputObj = `${req.body.userinput1}`
        res.json(req.body)
        readData('./data/tablo.json' , (err , res) => {
            if(res) {
                res['dersler'][selectObj].forEach(element => {
                    if(element == inputObj) {
                        for(let x =0; x < res['dersler'][selectObj].length; x++) {
                            if(res['dersler'][selectObj][x] == element) {
                                //delete the folowing array element
                                let deletedataIndex = res['dersler'][selectObj][x]
                                
                            }
                        }
                    }
                });
            } if(err) {
                console.log(err);
            }
        })
    })
}



function insertToDataFile() {
    let jsonpath = './data/tablo.json'
    readData(jsonpath , (req , data) => {
        if(data) {
            const urlencodedParser = bodyParser.urlencoded({extended:false})

            app.post('/InsertDataTable=true', urlencodedParser, [
                
            ] ,(req , res) => {
                let newObj = `${req.body.select}`
                let inputObj = `${req.body.userinput}`
                ;[inputObj].forEach(element => {
                    data['dersler'][newObj].push(element)
                });
                res.writeHead(200, {'Content-type':'text/html'});
                fs.readFile('./index.html', null, (err , data) => {
                    if(err) {
                        res.writeHead(404)
                        res.write('File not found!')
                    } else {
                        res.write(data)
                    }
                    res.end()
                })
                insertMain(jsonpath , data)
            })
        } if (req) {
            console.log(req);
        }
    })
}


//Insert Syfa overe here
function insertSyfa() {

    let jsonpath = './data/sayfa.json'

    const urlencodedParser = bodyParser.urlencoded({extended:false})

    app.post('/InsertDataSyafa=true' , urlencodedParser , [

    ] , (req , res) => {
        let select1Obj = `${req.body.select2}`
        let input1Obj = `${req.body.userinput2}`
        readData(jsonpath , (err , data) => {
            if(data) {
                ;[input1Obj].forEach(element => {
                    data['dersler'][select1Obj].push(element)
                })
                res.writeHead(200, {'Content-type':'text/html'});
                fs.readFile('./index.html', null, (err , data) => {
                    if(err) {
                        res.writeHead(404)
                        res.write('File not found!')
                    } else {
                        res.write(data)
                    }
                    res.end()
                })

                insertMain(jsonpath , data)

            } if(err) {
                console.log(err);
            }
        })
    })
}

//delete from sayfa file
function deleteFromSyfaFile() {
    
}


deleteFromFileData()
deleteFromKunuFile()
deleteFromSyfaFile()

insertSyfa()
insertToDataFile1()
insertToDataFile()

app.listen(process.env.PORT || 3000)