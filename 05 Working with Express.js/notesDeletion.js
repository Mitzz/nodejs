const path = require('path');
var fs=require('fs');

const directories = ['C:\\work\\Company\\node\\udemy\\NodeJsGraphQL\\notes\\LectureSlides']
    
function f1(){
    console.log('f1');
    const deletePath = "C:\\work\\Company\\node\\udemy\\NodeJsGraphQL\\git-repo\\05 Working with Express.js\\delete path.txt";
    const content = readFile(deletePath);
    //console.log(content);
    content.map(e => {
        const regExp = new RegExp(e);
        directories.map(directory => fromDir(directory, regExp, fileFound));
    });
    writeData(deletePath, [])
}

function fileFound(filename){
    // console.log('-- found: ',filename);
    // fs.unlink(filename);
    notesHtmlProcessing(filename);
}

function notesHtmlProcessing(filename){
    const notesPath = path.join(path.dirname(filename), 'notes.html');
    if(!fs.existsSync(notesPath)) return;
    console.log('-- HTML Parent Directory: ', notesPath);
    var name = path.basename(filename)
    // console.log("File Name: " + name)
    const existingContent = readFile(notesPath);
    // console.log("existing content", existingContent)
    var newContent = [];
    for(i in existingContent) {
        if(existingContent[i].indexOf(name) == -1) {
            newContent.push(existingContent[i]);
        }
    }
    writeData(notesPath, newContent)
}

function readFile(path1){
    const content = fs.readFileSync(path1);
    return content.toString().split("\n")
}

function writeData(filename, contentArr){
    console.log(filename);
    let a = '';
    contentArr.forEach(function(v) { (a = a + v + '\n'); });
    var file = fs.writeFileSync(filename, a) ;
    
}

function fromDir(startPath,filter,callback){
    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            if(fromDir(filename,filter,callback)){
                return true;
            }
        }
        else if (filter.test(filename)) {
            callback(filename);
            return true;
        }
    };
    return false;
};

f1();