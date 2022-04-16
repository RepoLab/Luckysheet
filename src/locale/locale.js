import en from './en'
import zh from './zh'
import es from './es'
import zh_tw from './zh_tw'
import Store from '../store';

const de = require('./de.json');

const localeObj = {en,zh,es,zh_tw,de}

function locale(){
    return localeObj[Store.lang];
}

export default locale;