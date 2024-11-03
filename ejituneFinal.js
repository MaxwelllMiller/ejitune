autowatch = 1;
inlets = 1;
outlets = 1;

var noteArray = [], freqArray = [], tempArray = [];
var fund, fundNote, base = 440, toConsole = 0, reCalc = 0;

function msg_int(x, y) {

    if (y == 0) { // This is how we handle all of our note off messages, setting the appropriate note with velocity 0, and then cutting it from our arrays.  We also retune when we remove notes.
        for (var i = 0; i < noteArray.length; i++ ){
            if (noteArray[i][0] == x){
                noteOff(i);
                noteArray.splice(i, 1);
                freqArray.splice(i, 1);
                retune();
                //output();
                if (toConsole == 1) {post('Note ' + x + ' cleared successfully.' + '\n');}
            }
        }
    } else {
        noteArray.push([x, y]);
        freqArray.push(toFreq(x));
        retune();
        output();
        if (toConsole == 1) {post('Note ' + x + ' stored successfully.' + '\n');}
    }

}

function calc(){
    tempArray = [];

    for (var i = 0; i < noteArray.length; i++){
        tempArray[i] = noteArray[i][0];
    }

    sort(tempArray);
    if (noteArray.length > 2){
        shuffle(tempArray);
        sort(tempArray);
    }
    
    fund = toFreq(tempArray[0]);
    fundNote = tempArray[0];
    
    
    if (toConsole == 1){
        for (var i = 0; i < tempArray.length; i++){
            post(tempArray[i]);
        }
        post('\n');
        post('fundamental is ' + fundNote);
        post('Fundamental is ' + fund + '\n');
    }
}

function retune(){
    var dif, offset, debug;

    if (noteArray.length > 1){
        calc();
    }
    
    for (var i = 0; i < freqArray.length; i++){
        
        dif = (noteArray[i][0] - fundNote);
        offset = Math.floor(dif / 24);

        if (toConsole == 1) {post('offset is ' + offset + '\n');}
        
        while (dif < 0){
            dif = dif + 12;
        }
        
        if (dif > 24){
            offset += Math.floor(dif / 24);
        }

        if (toConsole == 1) {post('dif is ' + dif + '\n');}
        switch (dif % 24) {
            case 0:
                break;
            case 1:
                if (offset >= 0){
                    freqArray[i] = fund * (16/15) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (16/15) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 2:
                if (offset >= 0){
                    freqArray[i] = fund * (9/8) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (9/8) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 3:
                if (offset >= 0){
                    freqArray[i] = fund * (6/5) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (6/5) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 4:
                if (offset >= 0){
                    freqArray[i] = fund * (5/4) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (5/4) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 5:
                if (offset >= 0){
                    freqArray[i] = fund * (4/3) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (4/3) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 6:
                if (offset >= 0){
                    freqArray[i] = fund * (7/5) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (7/5) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 7:
                if (offset >= 0){
                    freqArray[i] = fund * (3/2) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (3/2) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 8:
                if (offset >= 0){
                    freqArray[i] = fund * (8/5) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (8/5) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 9:
                if (offset >= 0){
                    freqArray[i] = fund * (27/16) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (27/16) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 10:
                if (offset >= 0){
                    freqArray[i] = fund * (7/4) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (7/4) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 11:
                if (offset >= 0){
                    freqArray[i] = fund * (15/8) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (15/8) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 12:
                break;
            case 13:
                if (offset >= 0){
                    freqArray[i] = fund * (17/8) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (17/8) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 14:
                if (offset >= 0){
                    freqArray[i] = fund * (18/8) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (18/8) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 15:
                if (offset >= 0){
                    freqArray[i] = fund * (19/8) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (19/8) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 16:
                if (offset >= 0){
                    freqArray[i] = fund * (10/4) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (10/4) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 17:
                if (offset >= 0){
                    freqArray[i] = fund * (11/4) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (11/4) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 18:
                if (offset >= 0){
                    freqArray[i] = fund * (23/8) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (23/8) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 19:
                if (offset >= 0){
                    freqArray[i] = fund * (6/2) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (6/2) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 20:
                if (offset >= 0){
                    freqArray[i] = fund * (26/8) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (26/8) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 21:
                if (offset >= 0){
                    freqArray[i] = fund * (27/8) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (27/8) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 22:
                if (offset >= 0){
                    freqArray[i] = fund * (7/2) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (7/2) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 23:
                if (offset >= 0){
                    freqArray[i] = fund * (31/8) * Math.pow(2, offset);
                } else if (offset < 0){
                    freqArray[i] = fund * (31/8) * (1 / Math.pow(2, Math.abs(offset)));
                } else {
                    post('error finding offset');
                }
                break;
            case 24:
                break;
            default:
                post('Error retuning array' + '\n');
                debug = 1;
                break;
        }
    }
    if (debug == 1){
        for (var i = 0; i < noteArray.length; i++){
            post(noteArray[i][0]);
        }
        post('\n');
        debug = 0;
    }
}

function diag(){
    if (noteArray.length > 0) {
        post('Current note array: ' + '\n');
        for (var i = 0; i < noteArray.length; i++){
            post('Index ' + i + ': ' + noteArray[i][0] + ' ' + noteArray[i][1] + '\n');
        }
    } else {
        post('Note array empty.' + '\n');
    }
    
    if (freqArray.length > 0) {
        post('Current freq array: ' + '\n');
        for (var i = 0; i < freqArray.length; i++){
            post('Index ' + i + ': ' + freqArray[i] + '\n');
        }
    } else {
        post('Freq array empty.' + '\n');
    }
    
}

function diagMode(n){
    toConsole = n;
}

function clear() {
    noteArray = [];
    freqArray = [];
    fund;
}

function setBase(n) {
    base = n
}

function sort(arr) {
    for (var i = 0; i < arr.length - 1; i++){
        for (var h = 0; h < arr.length - 1; h++){
            if (arr[h] > arr[h + 1]){
                var temp = arr[h];
                arr[h] = arr[h+1];
                arr[h+1] = temp;
            }
        }
    }
    return arr;
}

function shuffle(arr) {
    var tdif, x = 0, it = 0;
    while (x == 0){
        tdif = [];
        it++;
        for (var i = 0; i < arr.length - 1; i++) {
            tdif[i] = arr[i + 1] - arr[i];
        }

        for (var i = 0; i < arr.length - 1; i++) {
            if (tdif[i] == 2 && tdif[i+1] == 2){
                arr[i+1] += 12;
            } else if ((tdif[i] % 3 > 1 || tdif[i+1] % 3 > 1) && tdif[i] < 12) {
                arr[i] += 12;
            }
        }
        
        for (var i = 0; i < arr.length - 1; i++){
            if (tdif[i] == 3 || tdif[i] == 4 || tdif[i] == 6 || tdif[i] == 7 || tdif[i] == 10 || tdif[i] == 11 || tdif[i] >= 12) {
                x = 1;
                break;
            } 
        }
        
        if (x == 1){
            if (toConsole == 1) {post('success' + '\n');}
            break;
        } else if (it > 100){
            if (toConsole == 1) {post('failed to shuffle' + '\n');}
            x = 1;
        }
    }
    
    
    return arr;
}

function toFreq(x) {
    var freq = base * Math.exp(0.057762265 * (x - 69));
    //post('Midi note ' + x + ' is ' + freq + 'hz' + '\n');
    return freq;
}

function toNote(x) {
    var note = 12 * (Math.log(x/base)/Math.log(10)) / (Math.log(2)/Math.log(10)) + 69;
    //post('Freq ' + x + ' is midi note ' + note + '\n');
    return note;
}

function noteOff(i) {
    outlet(0, [noteArray[i][0], 0, freqArray[i]]);
}

function output() {
    for (var i = 0; i < noteArray.length; i++){
        outlet(0, [noteArray[i][0], 0, freqArray[i]]);
        outlet(0, [noteArray[i][0], noteArray[i][1], freqArray[i]]);
    }
}