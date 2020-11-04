import { utilService } from '../../../services/util-service.js'

const MAILS_STORAGE_KEY = 'mails_db'

var gMails = [
    {senderEmail: 'idogte2@gmail.com', id: '35254r1d1', senderName: 'Ido', subject: 'Wassap?', body: 'Hi, I would be happy to get started...', isRead: false, sentAt : 1604496265865},
    {senderEmail: 'roeeg54e@gmail.com', id: '643fhdh64', senderName: 'Roee', subject: 'Some Nice Offer!', body: 'This seems like a great video clip...', isRead: false, sentAt : 1551133930594},
    {senderEmail: 'neho326@gmail.com', id: '6436gddfd', senderName: 'Neho', subject: 'How are you buddy?', body: 'Pick up!', isRead: false, sentAt : 1551133930594}
]
export const mailService = {
    getMails,
    getById,
    getByIdx,
    removeMail
  }

  function getMails(){
     return Promise.resolve(gMails)
  }


  function getById(id) {
    const mail = gMails.find(currMail => currMail.id === id)
    return Promise.resolve(mail)
  }

  function getByIdx(idx) {
    return Promise.resolve(gMails[idx])
  }

  function removeMail(mailId, bookId) {
    return getById(bookId)
    .then(mail => { 
      var mailIdx = '';
      mail.find((mail, idx) => {
        if (mail.id === mailId) {
            mailIdx = idx;
        }
      })
      mail.splice(mailIdx, 1)
      utilService.storeToStorage(MAILS_STORAGE_KEY, gMails)
      return book;
    })
  }