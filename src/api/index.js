import { Connection } from './Connection';
import { getCommicByDesc, getCommicById } from './utils';

export function fetchCommics({ titleStartsWith, offset }) {
  const params = [
    { titleStartsWith },
    { offset }
  ];
  return fetch(getCommicByDesc(params))
    .then(res => res.json())
    .then(result => result.data);
}

export function fetchCommicById(id) {
  return fetch(getCommicById(id))
    .then(res => res.json())
    .then(res => res.data.results[0]);
}

export function login(dispatch) {
  Connection.firebase().auth.signInWithPopup(Connection.firebase().googleProvider);
  Connection.firebase().auth.onAuthStateChanged(dispatch);
}

export function logout() {
  Connection.firebase().auth.signOut();
}

export function savePost(post) {
  var newPostKey = Connection.firebase()
    .database.ref().child('commics').push().key;

  var updates = {};
  updates['/commics/' + newPostKey] = post;
  return Connection.firebase().database.ref().update(updates);
}

export async function fetchPosts(id) {
  let query = Connection.firebase().database.ref('commics/')
    .orderByChild('idcommic').equalTo(parseInt(id));
  return query.once('value')
}

