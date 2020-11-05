import { utilService } from '../../../services/util-service.js'

const MAILS_STORAGE_KEY = 'mails_db'

var gDefaultMails = [
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idogte2@gmail.com', id: '35254r1d1', senderName: 'Ido', subject: 'Wassap?', body: 'Hi, I would be happy to get started...', isRead: false, sentAt: 1604496265865 },
  { isSent: false, isNote: true, isDraft: false, isStar: false, senderEmail: 'roeeg54e@gmail.com', id: '643fhdh64', senderName: 'Roee', subject: 'Some Nice Offer!', body: 'This seems like a great video clip...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: true, isDraft: false, isStar: false, senderEmail: 'roeeg54e@gmail.com', id: '643fhdh64', senderName: 'Roee', subject: 'Some Nice Offer!', body: 'This seems like a great video clip...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: '646fhdh64', senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: false, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: '754dsdsd@gmail.com', id: '647fhdh64', senderName: 'PayPal', subject: 'Your monthly Invoice', body: 'Your monthly invoice is attached...', isRead: true, sentAt: 1551133930594 },
  { isSent: true, isNote: false, isDraft: false, isStar: false, senderEmail: '754dsdsd@gmail.com', id: '647fhdh64', senderName: 'Me', subject: 'Re: Our yearly trip to Australia', body: 'Your monthly invoice is attached...', isRead: true, sentAt: 1551133930594 },
  { isSent: true, isNote: false, isDraft: false, isStar: false, senderEmail: '754dsdsd@gmail.com', id: '647fhdh64', senderName: 'Me', subject: 'Re: Our yearly trip to Australia', body: 'Your monthly invoice is attached...', isRead: true, sentAt: 1551133930594 },
  { isSent: true, isNote: false, isDraft: false, isStar: false, senderEmail: '754dsdsd@gmail.com', id: '647fhdh64', senderName: 'Me', subject: 'Re: Our yearly trip to Australia', body: 'Your monthly invoice is attached...', isRead: true, sentAt: 1551133930594 },
  { isSent: true, isNote: false, isDraft: false, isStar: false, senderEmail: '754dsdsd@gmail.com', id: '647fhdh64', senderName: 'Me', subject: 'Re: Our yearly trip to Australia', body: 'Your monthly invoice is attached...', isRead: true, sentAt: 1551133930594 },
  { isSent: true, isNote: false, isDraft: false, isStar: false, senderEmail: '754dsdsd@gmail.com', id: '647fhdh64', senderName: 'Me', subject: 'Re: Our yearly trip to Australia', body: 'Your monthly invoice is attached...', isRead: true, sentAt: 1551133930594 },
  { isSent: true, isNote: false, isDraft: false, isStar: false, senderEmail: '754dsdsd@gmail.com', id: '647fhdh64', senderName: 'Me', subject: 'Re: Our yearly trip to Australia', body: 'Your monthly invoice is attached...', isRead: true, sentAt: 1551133930594 },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'neho326@gmail.com', id: '6436gddfd', senderName: 'Neho', subject: 'How are you buddy?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 }
]

var gMails = utilService.loadFromStorage(MAILS_STORAGE_KEY) || gDefaultMails;

export const mailService = {
  getMails,
  getById,
  getByIdx,
  removeMail,
  unMarkMail,
  markMail,
  starMail,
  getUnreadMails,
  getStarredMails,
  getDraftMails,
  getNotesMails,
  addMail,
  getEmptyMail
}

function getMails() {
  return Promise.resolve(gMails)
}

function getEmptyMail() {
  return { id: utilService.makeId(10), isSent: true, sentEmail: null, isNote: false, isDraft: false, isStar: false, senderEmail: 'myname@gmail.com', senderName: 'me', subject: '', body: '', isRead: true, sentAt: null };
}

function getById(id) {
  const mail = gMails.find(currMail => currMail.id === id);
  return Promise.resolve(mail);
}

function getByIdx(idx) {
  return Promise.resolve(gMails[idx]);
}



/**  Mail Actions Funcs   **/

function removeMail(mail) {
  var mailIdx = '';
  gMails.find((currMail, idx) => {
    if (currMail.id === mail.id) {
      mailIdx = idx;
    }
  })
  gMails.splice(mailIdx, 1)
  utilService.storeToStorage(MAILS_STORAGE_KEY, gMails);
  return mail;
}

function markMail(mail) {
  mail.isRead = false;
  utilService.storeToStorage(MAILS_STORAGE_KEY, gMails);
}

function unMarkMail(mail) {
  mail.isRead = true;
  utilService.storeToStorage(MAILS_STORAGE_KEY, gMails);
}
function starMail(mail) {
  mail.isStar = !mail.isStar;
  utilService.storeToStorage(MAILS_STORAGE_KEY, gMails);
}

function addMail(mail) {
  gMails.unshift(mail);
  utilService.storeToStorage(MAILS_STORAGE_KEY, gMails);
  return mail;
}

/**  Mail Get Funcs   **/

function getUnreadMails() {
  var unReadMails = gMails.filter(mail => !mail.isRead)
  return Promise.resolve(unReadMails)
}

function getStarredMails() {
  var starredMails = gMails.filter(mail => mail.isStar)
  return Promise.resolve(starredMails)
}
function getDraftMails() {
  var draftMails = gMails.filter(mail => mail.isDraft)
  return Promise.resolve(draftMails)
}

function getNotesMails() {
  var notesMails = gMails.filter(mail => mail.isNote)
  return Promise.resolve(notesMails)
}



// function getMailsByKey(key){
//   var newMails = gMails.filter(mail => mail[key]);
//   return Promise.resolve(newMails);
// }

// function getUnreadMails() {
//   var unReadMails = gMails.filter(mail => !mail.isRead);
//   return Promise.resolve(unReadMails);
// }

// function getStarredMails() {
//   var starredMails = gMails.filter(mail => mail.isStar);
//   return Promise.resolve(starredMails);
// }
// function getDraftMails() {
//   var draftMails = gMails.filter(mail => mail.isDraft);
//   return Promise.resolve(draftMails);
// }

// function getNotesMails() {
//   var notesMails = gMails.filter(mail => mail.isNote)
//   return Promise.resolve(notesMails);
// }