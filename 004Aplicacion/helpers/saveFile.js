import fs from 'fs';
const archivo = './db/data.json';
const saveFile = (data)=>{
    fs.writeFileSync(archivo, JSON.stringify(data));
};

const loadFile = ()=>{
    if(!fs.existsSync(archivo)){
        return null;
    }
    const info = fs.readFileSync(archivo, {encoding:'utf8'});
    const data = JSON.parse(info);
    return data;
}

export {
    saveFile,
    loadFile
}