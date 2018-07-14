export const AddPlayer = (firstname, lastname) => ({
  type: 'ADD_PLAYER',
  firstname,
  lastname
})

export const EditPlayer = (id, firstname, lastname) => ({
  type: 'EDIT_PLAYER',
  id,
  firstname,
  lastname
})

export const RemovePlayer = id => ({
  type: 'REMOVE_PLAYER',
  id
})

