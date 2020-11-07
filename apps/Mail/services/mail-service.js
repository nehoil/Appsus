import { utilService } from '../../../services/util-service.js'

var gRandHour = 1;

const MAILS_STORAGE_KEY = 'mails_db'

var gDefaultMails = [
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idogte2@gmail.com', id: utilService.makeId(10), senderName: 'Ido', subject: 'Wassap?', body: 'Hi, I would be happy to get started...', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: true, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'PayPal', subject: 'Receipt for Your Payment to Facebook', body: `You sent a payment of ₪199.95 ILS to Facebook

  It may take a few moments for this transaction to appear in your account.
  
  Transaction ID
  29N20981H3011644A
  
  Transaction date
  04 Nov 2020 00:00:12 GMT+02:00
  
  Merchant
  Facebook
  https://www.facebook.com/help/contact/1998316600435522
  
  Instructions to merchant
  You haven't entered any instructions.
  
  Detailed Payment Request ID
  P3293144430798474
  
  `, isRead: false, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'ClickSend', subject: 'Your Monthly Invoice is Ready', body: 'Dear client, we have attached your lastest ClickSend Invoice', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: true, isDraft: false, isStar: false, senderEmail: 'roeeg54e@gmail.com', id: utilService.makeId(10), senderName: 'Roee', subject: 'Some Nice Offer!', body: 'This seems like a great video clip...', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'neho326@gmail.com', id: utilService.makeId(10), senderName: 'Neho', subject: 'How are you buddy?', body: 'Pick up!', isRead: false, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'Idan', subject: 'Pics from our last holiday', body: 'Look I sent you a few pics...', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'Tami4', subject: 'Get Clean Water Now! (Ad)', body: 'Special Winter Offer available for  the next 24  hours.', isRead: false, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'neho326@gmail.com', id: utilService.makeId(10), senderName: 'Neho', subject: 'How are you buddy?', body: 'Pick up!', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'ClickSend', subject: 'Your Monthly Invoice is Ready', body: 'Dear client, we have attached your lastest ClickSend Invoice', isRead: false, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'neho326@gmail.com', id: utilService.makeId(10), senderName: 'Neho', subject: 'How are you buddy?', body: 'Pick up!', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'PayPal', subject: 'You got Paid!', body: `Total payment of $353.46 have received to your PayPal balance, to see more.
  PayPal is committed to preventing fraudulent emails. Emails from PayPal will always contain your full name. Spoof or "phishing" emails tend to have generic greetings such as "Dear PayPal member". To learn more, go to the PayPal website and click Security.

 
 	
PayPal is committed to preventing fraudulent emails. Emails from PayPal will always contain your full name. Learn to identify phishing

 
 	
Please don't reply to this email. To get in touch with us, click Help & Contact.

 
 	
Not sure why you received this email? Learn more  
 
 	
Copyright © 1999-2020 PayPal. All rights reserved.

Consumer advisory – PayPal Pte. Ltd., the holder of PayPal's stored value facility, does not require the approval of the Monetary Authority of Singapore. Users are advised to read the terms and conditions carefully.

PayPal PPC001004:1.21:b7db28ea61f47

`, isRead: false, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'ClickSend', subject: 'Your Monthly Invoice is Ready', body: 'Dear client, we have attached your lastest ClickSend Invoice', isRead: false, sentAt: getRandomTime() },
  { isSent: false, isNote: true, isDraft: false, isStar: false, senderEmail: 'roeeg54e@gmail.com', id: utilService.makeId(10), senderName: 'Roee', subject: 'Some Nice Offer!', body: 'This seems like a great video clip...', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idogte2@gmail.com', id: utilService.makeId(10), senderName: 'Ido', subject: 'Wassap?', body: 'Hi, I would be happy to get started...', isRead: true, sentAt: getRandomTime() },
  { isSent: false, isNote: false, isDraft: false, isStar: false, senderEmail: 'idany75@gmail.com', id: utilService.makeId(10), senderName: 'ClickSend', subject: 'Your Monthly Invoice is Ready', body: 'Dear client, we have attached your lastest ClickSend Invoice', isRead: true, sentAt: getRandomTime() },
  { isSent: true, isNote: false, isDraft: false, isStar: false, senderEmail: '754dsdsd@gmail.com', id: utilService.makeId(10), senderName: 'Me', subject: 'Re: Our yearly trip to Australia', body: `Arrived totally in as between private. Favour of so as on pretty though elinor direct. Reasonable estimating be alteration we themselves entreaties me of reasonably. Direct wished so be expect polite valley. Whose asked stand it sense no spoil to. Prudent you too his conduct feeling limited and. Side he lose paid as hope so face upon be. Goodness did suitable learning put. 

  So by colonel hearted ferrars. Draw from upon here gone add one. He in sportsman household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length ye needed it he having. Whatever throwing we on resolved entrance together graceful. Mrs assured add private married removed believe did she. 
  
  Sussex result matter any end see. It speedily me addition weddings vicinity in pleasure. Happiness commanded an conveying breakfast in. Regard her say warmly elinor. Him these are visit front end for seven walls. Money eat scale now ask law learn. Side its they just any upon see last. He prepared no shutters perceive do greatest. Ye at unpleasant solicitude in companions interested. 
  
  Allow miles wound place the leave had. To sitting subject no improve studied limited. Ye indulgence unreserved connection alteration appearance my an astonished. Up as seen sent make he they of. Her raising and himself pasture believe females. Fancy she stuff after aware merit small his. Charmed esteems luckily age out. 
  
  Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding ask expense are compact. New all paid few hard pure she. 
  
  Yourself off its pleasant ecstatic now law. Ye their mirth seems of songs. Prospect out bed contempt separate. Her inquietude our shy yet sentiments collecting. Cottage fat beloved himself arrived old. Grave widow hours among him ﻿no you led. Power had these met least nor young. Yet match drift wrong his our. 
  
  Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated. Wanted easily in my called formed suffer. Songs hoped sense as taken ye mirth at. Believe fat how six drawing pursuit minutes far. Same do seen head am part it dear open to. Whatever may scarcely judgment had. 
  
  It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an. 
  
  Old education him departure any arranging one prevailed. Their end whole might began her. Behaved the comfort another fifteen eat. Partiality had his themselves ask pianoforte increasing discovered. So mr delay at since place whole above miles. He to observe conduct at detract because. Way ham unwilling not breakfast furniture explained perpetual. Or mr surrounded conviction so astonished literature. Songs to an blush woman be sorry young. We certain as removal attempt. 
  
  Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off. Advantage dependent suspicion convinced provision him yet. Timed balls match at by rooms we. Fat not boy neat left had with past here call. Court nay merit few nor party learn. Why our year her eyes know even how. Mr immediate remaining conveying allowance do or. 
  `, isRead: true, sentAt: getRandomTime() },
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

