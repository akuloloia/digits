import {Contacts} from '../../api/contacts/contacts.js';
import {_} from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const ContactsSeeds = [
  {
    first: 'Anthony',
    last: 'Kuloloia',
    address: '95-997 Ukuwai Street',
    telephone: '808-366-9157',
    email: 'akuloloi@hawaii.edu',
  },
  {
    first: 'Henri',
    last: 'Casanova',
    address: '95-997 Ukuwai Street',
    telephone: '808-366-9157',
    email: 'henric@hawaii.edu',
  },
  {
    first: 'Kim',
    last: 'Binsted',
    address: '95-997 Ukuwai Street',
    telephone: '808-366-9157',
    email: 'binsted@hawaii.edu',
  },
  {
    first: 'David',
    last: 'Chin',
    address: '95-997 Ukuwai Street',
    telephone: '808-366-9157',
    email: 'chin@hawaii.edu',
  },

];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(ContactsSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
