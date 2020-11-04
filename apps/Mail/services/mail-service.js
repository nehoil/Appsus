import { utilService } from '../../../services/util-service.js'

const MAILS_STORAGE_KEY = 'mails_db'

var gDefaultMails = [
  { isStar: false, senderEmail: 'idogte2@gmail.com', id: '35254r1d1', senderName: 'Ido', subject: 'Wassap?', body: 'Hi, I would be happy to get started...', isRead: false, sentAt: 1604496265865 },
  { isStar: true, senderEmail: 'roeeg54e@gmail.com', id: '643fhdh64', senderName: 'Roee', subject: 'Some Nice Offer!', body: 'This seems like a great video clip...', isRead: false, sentAt: 1551133930594 },
  { isStar: false, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isStar: false, senderEmail: '754dsdsd@gmail.com', id: '647fhdh64', senderName: 'PayPal', subject: 'Your monthly Invoice', body: 'Your monthly invoice is attached...', isRead: true, sentAt: 1551133930594 },
  { isStar: false, senderEmail: 'neho326@gmail.com', id: '6436gddfd', senderName: 'Neho', subject: 'How are you buddy?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 }
]

var gMails = utilService.loadFromStorage(MAILS_STORAGE_KEY) || gDefaultMails;

export const mailService = {
  getMails,
  getById,
  getByIdx,
  removeMail,
  unMarkMail,
  markMail,
  starMail
}

function getMails() {
  return Promise.resolve(gMails)
}


function getById(id) {
  const mail = gMails.find(currMail => currMail.id === id)
  return Promise.resolve(mail)
}

function getByIdx(idx) {
  return Promise.resolve(gMails[idx])
}

function removeMail(mail) {
  var mailIdx = '';
  gMails.find((currMail, idx) => {
    if (currMail.id === mail.id) {
      mailIdx = idx;
    }
  })
  console.log(mail);
  gMails.splice(mailIdx, 1)
  utilService.storeToStorage(MAILS_STORAGE_KEY, gMails)
  return mail;
}

// function removeMail(mailId, bookId) {
//   return getById(bookId)
//   .then(mail => { 
//     var mailIdx = '';
//     mail.find((mail, idx) => {
//       if (mail.id === mailId) {
//           mailIdx = idx;
//       }
//     })
//     mail.splice(mailIdx, 1)
//     utilService.storeToStorage(MAILS_STORAGE_KEY, gMails)
//     return book;
//   })
// }


/**  Mail Actions Funcs   **/

function markMail(mail){
  mail.isRead = false;
  utilService.storeToStorage(MAILS_STORAGE_KEY, gMails)
}

function unMarkMail(mail){
  mail.isRead = true;
  utilService.storeToStorage(MAILS_STORAGE_KEY, gMails)
}
function starMail(mail){
  mail.isStar = !mail.isStar;
  utilService.storeToStorage(MAILS_STORAGE_KEY, gMails)
}