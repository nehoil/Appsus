import { utilService } from '../../../services/util-service.js'

const MAILS_STORAGE_KEY = 'mails_db'

var gMails = [
    {id: '35254r1d1', sender: 'Ido', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1604496265865},
    {id: '643fhdh64', sender: 'Roee', subject: 'Some Nice Offer!', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    {id: '6436gddfd', sender: 'Neho', subject: 'How are you buddy?', body: 'Pick up!', isRead: false, sentAt : 1551133930594}
]
export const mailService = {
    getMails
  }

  function getMails(){
     return Promise.resolve(gMails)
  }