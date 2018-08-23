export default{
    en : {
        messages : {
            required(field){
                return field + 'must be entered'
            },
            min(field){
                return field + ' at least ...'
            }
        },
        attributes : {

        }
    },
    th : {
        messages : {
            required(field){
                return 'ต้องป้อน' + field + ' นะ'
            },
            min(field){
                return field + ' ความยาว ...'
            }
        },
        attributes : {
            name : 'ชื่อ',
            surname : 'นามสกุล' 
        }
    }
}