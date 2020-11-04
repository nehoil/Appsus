import { utilService } from '../../../services/util-service.js'

const MAILS_STORAGE_KEY = 'mails_db'

var gMails = [
    {subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    {subject: 'Some Nice Offer!', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    {subject: 'How are you buddy?', body: 'Pick up!', isRead: false, sentAt : 1551133930594}
]
export const mailService = {
    getMails
  }

  function getMails(){
     return Promise.resolve(gMails)
  }