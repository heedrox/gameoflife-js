import {reduce, join} from 'ramda';

const buildHeader = (dash) => dash.length+" "+dash[0].length;
const buildBody = (dash) => dash.reduce((a,b) => a+"\n"+b.join("") ,"").trim();
const golBuildDash = (dash) => buildHeader(dash)+"\n"+buildBody(dash);

export { golBuildDash }