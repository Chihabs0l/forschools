// code for school use

function openKunuFile() {
    const req = new XMLHttpRequest();
    req.open('GET', './data/kunu.json', false)
    var tablei = document.getElementById('table3')
    function returnData() {
        const data = JSON.parse(req.responseText)
        let renderSettes = `
        <tr>
            <th>Ders</th>
            <th>Konu</th>
        </tr>
        `
        tablei.insertAdjacentHTML('beforeend', renderSettes)
        for (const key in data['dersler']) {
            for (const keys in data['dersler'][key]) {
                var newset = `<th>${keys}</th>`
            }
            let table = `
            <tr>
                <td>${key}</td>
                <td>${JSON.stringify(data['dersler'][key])}</td>
            </tr>
            `
            tablei.insertAdjacentHTML('beforeend' , table)
        }
    }
    req.send()
    return returnData()
}




function openSayfa() {
    const req = new XMLHttpRequest()
    req.open('GET', './data/sayfa.json', false)
    function returnData() {
        const data = JSON.parse(req.responseText)
        renderToTable2(`<tr>
        <th>Ders</th>
        <th>Syafa</th>
        </tr>
        <tr>
        <td>Kuran</td>
        <td>${data['dersler']['Kuran'].join('/')}</td>
        </tr>
        <tr>
        <td>Hitabet</td>
        <td>${data['dersler']['Hitabet'].join('/')}</td>
        </tr>
        <tr>
        <td>Akaid</td>
        <td>${data['dersler']['Akaid'].join('/')}</td>
        </tr>
        <tr>
        <td>Arapca</td>
        <td>${data['dersler']['Arapca'].join('/')}</td>
        </tr>
        <tr>
        <td>Tefsir</td>
        <td>${data['dersler']['Tefsir'].join('/')}</td>
        </tr>
        <tr>
        <td>Ingilizce</td>
        <td>${data['dersler']['Ingilizce'].join('/')}</td>
        </tr>
        <tr>
        <td>Kimya</td>
        <td>${data['dersler']['Kimya'].join('/')}</td>
        </tr>
        <tr>
        <td>Tarih</td>
        <td>${data['dersler']['Tarih'].join('/')}</td>
        </tr>
        <tr>
        <td>Turkce</td>
        <td>${data['dersler']['Turkce'].join('/')}</td>
        </tr>
        <tr>
        <td>Biyoloji</td>
        <td>${data['dersler']['Biyoloji'].join('/')}</td>
        </tr>
        <tr>
        <td>Fizik</td>
        <td>${data['dersler']['Fizik'].join('/')}</td>
        </tr>
        <tr>
        <td>Matematik</td>
        <td>${data['dersler']['Matematik'].join('/')}</td>
        </tr>
        <tr>
        <td>Felsefe</td>
        <td>${data['dersler']['Felsefe'].join('/')}</td>
        </tr>
        `
        )
    }
    req.send()
    return returnData()
}

function openTablo() {
    const req = new XMLHttpRequest()
    req.open('GET', './data/tablo.json', false)
    function returnData() {
        const data = JSON.parse(req.responseText)
        renderToTable(`<tr>
        <th>Ders</th>
        <th>Tablo</th>
        </tr>
        <tr>
        <td>Kuran</td>
        <td>${data['dersler']['Kuran']}</td>
        </tr>
        <tr>
        <td>Hitabet</td>
        <td>${data['dersler']['Hitabet']}</td>
        </tr>
        <tr>
        <td>Akaid</td>
        <td>${data['dersler']['Akaid']}</td>
        </tr>
        <tr>
        <td>Arapca</td>
        <td>${data['dersler']['Arapca']}</td>
        </tr>
        <tr>
        <td>Tefsir</td>
        <td>${data['dersler']['Tefsir']}</td>
        </tr>
        <tr>
        <td>Ingilizce</td>
        <td>${data['dersler']['Ingilizce']}</td>
        </tr>
        <tr>
        <td>Kimya</td>
        <td>${data['dersler']['Kimya']}</td>
        </tr>
        <tr>
        <td>Tarih</td>
        <td>${data['dersler']['Tarih']}</td>
        </tr>
        <tr>
        <td>Turkce</td>
        <td>${data['dersler']['Turkce']}</td>
        </tr>
        <tr>
        <td>Biyoloji</td>
        <td>${data['dersler']['Biyoloji']}</td>
        </tr>
        <tr>
        <td>Fizik</td>
        <td>${data['dersler']['Fizik']}</td>
        </tr>
        <tr>
        <td>Matematik</td>
        <td>${data['dersler']['Matematik']}</td>
        </tr>
        <tr>
        <td>Felsefe</td>
        <td>${data['dersler']['Felsefe']}</td>
        </tr>
        `
        )
    }
    req.send()
    returnData()
}

openTablo()
openSayfa()
openKunuFile()

function renderToTable(data) {
    const table = document.getElementById('table')
    table.innerHTML = data
}

function renderToTable2(data) {
    const table = document.getElementById('table2')
    table.innerHTML = data
}

function selectOption(data) {
    const select = document.getElementById('select-item')
    select.innerHTML = data
}


function selectOption3(data) {
    const select = document.getElementById('select-item3')
    select.innerHTML = data
}

function selectOption4(data) {
    const select = document.getElementById('select-item4')
    select.innerHTML = data
}

function selectOption5(data) {
    const select = document.getElementById('select-item5')
    select.innerHTML = data
}

function selectOption6(data) {
    const select = document.getElementById('select-item6')
    select.innerHTML = data
}




function storeData() {
    let newreq = new XMLHttpRequest()
    newreq.open('GET', './data/dersler.json',false)
    function data() {
        let newdata = JSON.parse(newreq.responseText)
        for(var x = 0; x < newdata['dersler'].length; x++) {
            const select = document.getElementById('select-item2')
            const select1 = document.getElementById('select-item')
            const select2 = document.getElementById('select-item3')
            const select3 = document.getElementById('select-item4')
            const select4 = document.getElementById('select-item5')
            const select5 = document.getElementById('select-item6')
            select5.insertAdjacentHTML('beforeend',`<option>${newdata['dersler'][x]}</option>`)
            select4.insertAdjacentHTML('beforeend',`<option>${newdata['dersler'][x]}</option>`)
            select3.insertAdjacentHTML('beforeend',`<option>${newdata['dersler'][x]}</option>`)
            select2.insertAdjacentHTML('beforeend',`<option>${newdata['dersler'][x]}</option>`)
            select1.insertAdjacentHTML('beforeend',`<option>${newdata['dersler'][x]}</option>`)
            select.insertAdjacentHTML('beforeend',`<option>${newdata['dersler'][x]}</option>`)
        }
    }
    newreq.send()
    return data()
}



function data() {
    const req = new XMLHttpRequest()
    req.open('GET', './data/tablo.json', false)
    function returnData() {
        var data = JSON.parse(req.responseText) 
        let newreq = new XMLHttpRequest()
        newreq.open('GET', './data/dersler.json',false)
        function ret() {
            let newdata = JSON.parse(newreq.responseText)
            for(var x = 0; x < newdata['dersler'].length; x++) {
                var select = document.getElementById('select-item2')
                const selector = document.getElementById('select-sil1')
                select.addEventListener('change' , () => {
                    data['dersler'][newdata['dersler'][x --]]
                    switch(true) {
                        case select.value == 'Kuran':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                });
                                
                            }
                        case select.value == 'Hitabet':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''  
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                });
                            }
                        case select.value == 'Akaid':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Arapca':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Tefsir':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Ingilizce':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Kimya':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Tarih':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Turkce':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Biyoloji':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Fizik':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Matematik':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Felsefe':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                });
                            }
                    }
                })
            }
        }
        newreq.send()
        ret()
    }
    req.send()
    returnData()
}

function data1() {
    const req = new XMLHttpRequest()
    req.open('GET', './data/sayfa.json', false)
    function returnData() {
        var data = JSON.parse(req.responseText) 
        let newreq = new XMLHttpRequest()
        newreq.open('GET', './data/dersler.json',false)
        function ret() {
            let newdata = JSON.parse(newreq.responseText)
            for(var x = 0; x < newdata['dersler'].length; x++) {
                var select = document.getElementById('select-item4')
                const selector = document.getElementById('revselect')
                select.addEventListener('change' , () => {
                    data['dersler'][newdata['dersler'][x --]]
                    switch(true) {
                        case select.value == 'Kuran':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                });
                                
                            }
                        case select.value == 'Hitabet':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''  
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                });
                            }
                        case select.value == 'Akaid':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Arapca':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Tefsir':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Ingilizce':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Kimya':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Tarih':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Turkce':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Biyoloji':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Fizik':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Matematik':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                    
                                });
                            }
                        case select.value == 'Felsefe':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                data['dersler'][newdata['dersler'][x]].forEach(element => {
                                    selector.insertAdjacentHTML('beforeend',`<option>${element}</option>`)
                                });
                            }
                    }
                })
            }
        }
        newreq.send()
        ret()
    }
    req.send()
    returnData()
}

function data2() {
    const req = new XMLHttpRequest()
    req.open('GET', './data/kunu.json', false)
    function returnData() {
        var data = JSON.parse(req.responseText) 
        let newreq = new XMLHttpRequest()
        newreq.open('GET', './data/dersler.json',false)
        function ret() {
            let newdata = JSON.parse(newreq.responseText)
            for(var x = 0; x < newdata['dersler'].length; x++) {
                var select = document.getElementById('select-item6')
                const selector = document.getElementById('revselect2')
                select.addEventListener('change' , () => {
                    data['dersler'][newdata['dersler'][x --]]
                    switch(true) {
                        case select.value == 'Kuran':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                for (const key in data['dersler'][newdata['dersler'][x]]) {
                                    selector.insertAdjacentHTML('beforeend',`<option>${key}</option>`)
                                }
                                
                            }
                        
                        case select.value == 'Hitabet':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''  
                                for (const key in data['dersler'][newdata['dersler'][x]]) {
                                    selector.insertAdjacentHTML('beforeend',`<option>${key}</option>`)
                                }
                            }
                        case select.value == 'Akaid':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                for (const key in data['dersler'][newdata['dersler'][x]]) {
                                    selector.insertAdjacentHTML('beforeend',`<option>${key}</option>`)
                                }
                            }
                        case select.value == 'Arapca':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                for (const key in data['dersler'][newdata['dersler'][x]]) {
                                    selector.insertAdjacentHTML('beforeend',`<option>${key}</option>`)
                                }
                            }
                        case select.value == 'Tefsir':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                for (const key in data['dersler'][newdata['dersler'][x]]) {
                                    selector.insertAdjacentHTML('beforeend',`<option>${key}</option>`)
                                }
                            }
                        case select.value == 'Ingilizce':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                for (const key in data['dersler'][newdata['dersler'][x]]) {
                                    selector.insertAdjacentHTML('beforeend',`<option>${key}</option>`)
                                }
                            }
                        case select.value == 'Kimya':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                for (const key in data['dersler'][newdata['dersler'][x]]) {
                                    selector.insertAdjacentHTML('beforeend',`<option>${key}</option>`)
                                }
                            }
                        case select.value == 'Tarih':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                for (const key in data['dersler'][newdata['dersler'][x]]) {
                                    selector.insertAdjacentHTML('beforeend',`<option>${key}</option>`)
                                }
                            }
                        case select.value == 'Turkce':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                for (const key in data['dersler'][newdata['dersler'][x]]) {
                                    selector.insertAdjacentHTML('beforeend',`<option>${key}</option>`)
                                }
                            }
                        case select.value == 'Biyoloji':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                for (const key in data['dersler'][newdata['dersler'][x]]) {
                                    selector.insertAdjacentHTML('beforeend',`<option>${key}</option>`)
                                }
                            }
                        case select.value == 'Fizik':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                for (const key in data['dersler'][newdata['dersler'][x]]) {
                                    selector.insertAdjacentHTML('beforeend',`<option>${key}</option>`)
                                }
                            }
                        case select.value == 'Matematik':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                for (const key in data['dersler'][newdata['dersler'][x]]) {
                                    selector.insertAdjacentHTML('beforeend',`<option>${key}</option>`)
                                }
                            }
                        case select.value == 'Felsefe':
                            if(newdata['dersler'][x] == select.value) {
                                selector.innerHTML = ''
                                for (const key in data['dersler'][newdata['dersler'][x]]) {
                                    selector.insertAdjacentHTML('beforeend',`<option>${key}</option>`)
                                }
                            }
                    }
                })
            }
        }
        newreq.send()
        ret()
    }
    req.send()
    returnData()
}

//delete data
function deletedata(url , method) {
    $.ajax({
        method:method,
        url:url,
        success: (posRes) => {
            console.log(posRes);
        }, error: (errRes) => {
            console.log(errRes);
        }
    })
}

const deleteoption = document.getElementById('select-item2')
const deleteoption2 = document.getElementById('select-sil1')


//req function

//delete data
function listenOnClick() {
   const req = new XMLHttpRequest()
   req.open('GET', './data/tablo.json' , false)
   function returnData() {
       const data = JSON.parse(req.responseText)
       for (const key in data['dersler']) {
        if(key == deleteoption.value) {
            data['dersler'][key].forEach(element => {
                if(deleteoption2.value == element) {
                    console.log(key);
                    console.log(deleteoption2.value)
                    deletedata('./data/tablo.json' , 'DELETE')
                }
            });
        }
       }
    }
   req.send()
   return returnData()
}



storeData()
data()
data1()
data2()