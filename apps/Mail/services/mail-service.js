import { utilService } from '../../../services/util-service.js'

var gRandHour = 1;

const MAILS_STORAGE_KEY = 'mails_db'

var gDefaultMails = [
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idogte2@gmail.com', id: utilService.makeId(10), senderName: 'Ido', subject: 'Wassap?', body: 'Hi, I would be happy to get started...', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'PayPal', subject: 'You got Paid!', body: 'Total payment of $353.46 have received to your PayPal balance, to see more.', isRead: false, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'ClickSend', subject: 'Your Monthly Invoice is Ready', body: 'Dear client, we have attached your lastest ClickSend Invoice', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: true, isDraft: false, isStar: false, senderEmail: 'roeeg54e@gmail.com', id: utilService.makeId(10), senderName: 'Roee', subject: 'Some Nice Offer!', body: 'This seems like a great video clip...', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'neho326@gmail.com', id: utilService.makeId(10), senderName: 'Neho', subject: 'How are you buddy?', body: 'Pick up!', isRead: false, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'Tami4', subject: 'Get Clean Water Now! (Ad)', body: 'Special Winter Offer available for  the next 24  hours.', isRead: false, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'neho326@gmail.com', id: utilService.makeId(10), senderName: 'Neho', subject: 'How are you buddy?', body: 'Pick up!', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'ClickSend', subject: 'Your Monthly Invoice is Ready', body: 'Dear client, we have attached your lastest ClickSend Invoice', isRead: false, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'neho326@gmail.com', id: utilService.makeId(10), senderName: 'Neho', subject: 'How are you buddy?', body: 'Pick up!', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'PayPal', subject: 'You got Paid!', body: 'Total payment of $353.46 have received to your PayPal balance, to see more.', isRead: false, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'ClickSend', subject: 'Your Monthly Invoice is Ready', body: 'Dear client, we have attached your lastest ClickSend Invoice', isRead: false, sentAt: getRandomTime() },
  { isSent: false, isNote: true, isDraft: false, isStar: false, senderEmail: 'roeeg54e@gmail.com', id: utilService.makeId(10), senderName: 'Roee', subject: 'Some Nice Offer!', body: 'This seems like a great video clip...', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idogte2@gmail.com', id: utilService.makeId(10), senderName: 'Ido', subject: 'Wassap?', body: 'Hi, I would be happy to get started...', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'ClickSend', subject: 'Your Monthly Invoice is Ready', body: 'Dear client, we have attached your lastest ClickSend Invoice', isRead: true, sentAt: getRandomTime() },
  { isSent: true, isNote: false, isDraft: false, isStar: false, senderEmail: '754dsdsd@gmail.com', id: utilService.makeId(10), senderName: 'Me', subject: 'Re: Our yearly trip to Australia', body: 'Your monthly invoice is attached...', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'ClickSend', subject: 'Your Monthly Invoice is Ready', body: 'Dear client, we have attached your lastest ClickSend Invoice', isRead: false, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'neho326@gmail.com', id: utilService.makeId(10), senderName: 'Neho', subject: 'How are you buddy?', body: 'Pick up!', isRead: false, sentAt: getRandomTime() }
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
  getEmptyMail,
  addNoteToMails
}


function addNoteToMails(note) {
  const newEmail = {
    id: utilService.makeId(10),
    isSent: false,
    sentEmail: null,
    isNote: true,
    isDraft: false,
    isStar: false,
    senderEmail: 'myname@gmail.com',
    senderName: 'me',
    subject: 'Your Saved Note: '+ utilService.makeId(5),
    body: note.info.title,
    isRead: false,
    sentAt: new Date().getTime()
  };


  addMail(newEmail);

  utilService.storeToStorage(MAILS_STORAGE_KEY, gMails);

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

function getRandomTime() {
  return new Date().getTime() - 1000000 * gRandHour++ * 2.6
  // gRandHour++
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

