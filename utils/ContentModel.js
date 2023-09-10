export class ContentModel {
    id;
    title='';
    subtitle='';
    description='';
    excerpt=''
    image='';
    color='';
    bgColor='';
    borderColor='';
    classes='';
    link='';
    metadata;


    constructor(obj) {
        let keys = Object.keys(obj)
        if(obj.excerpt === undefined && obj.description) {
            obj.excerpt = obj.description.substring(0, 34)
        }

        keys.forEach(key => (
            this[key] = obj[key]
        ))

        console.log(this)
    }
}