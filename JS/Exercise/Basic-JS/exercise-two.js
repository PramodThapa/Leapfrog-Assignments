
const personalDetail={
    name:'Pramod Thapa',
    address:'Balkumari, Lalitpur',
    email:'thapa1pramod82@gmail.com',
    interest:['playing football','watching series', 'reading novels'],
    education:[
        {
            name:'Paramount B.H.S.S',
            enrolledDate:'2003'
        },
        {
            name:'Capital College and Research Center',
            enrolledDate:'2015'
        },
        {
            name:'Kathmandu University',
            enrolledDate:'2017'
        }
    ]
}

function displayEduacationDetail(value){
    console.log(`Name:${value.name},Date:${value.enrolledDate}`)
}

personalDetail.education.forEach(displayEduacationDetail)

