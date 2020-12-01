//const logger = require('./logger');
const getSchools = require('vtfk-schools-info');


module.exports = (data) => {
    let schoolInfo = getSchools({ shortName: data.school.id });
    if (!schoolInfo || schoolInfo.length == 0) {
        //logger('warn', ['convert-to-old-document', data.school.id, 'School info not found']);
        console.warn('convert-to-old-document', data.school.id, 'School info not found')
        schoolInfo = {
            phoneNumber: '',
            organizationNumber: ''
        };
    }
    else schoolInfo = schoolInfo[0];

    return {
        "_id": data._id,
        "timestamp": data.created.timestamp,
        "documentDate": new Date(data.created.timestamp).toISOString(),
        "skjemaUtfyllingStart": data.created.timestamp,
        "userId": data.created.createdBy,
        "userName": data.teacher.name,
        "studentName": data.student.name,
        "studentFirstName": data.student.firstName,
        "studentMiddleName": data.student.middleName || '',
        "studentLastName": data.student.lastName,
        "studentId": data.student.personalIdNumber || '',
        "studentUserName": data.student.username,
        "studentMail": data.student.mail || `${data.student.username}@skole.vtfk.no`,
        "studentPhone": data.student.mobile || '',
        "studentMainGroupName": data.student.groupId || '',
        "schoolId": data.school.id,
        "schoolName": data.school.name,
        "schoolPhone": schoolInfo.phoneNumber,
        "schoolOrganizationNumber": schoolInfo.organizationNumber,
        "documentType": data.type,
        "documentCategory": data.variant,
        "documentContent": "",
        "documentStatus": data.status,
        "isQueued": data.isQueued
    }
}