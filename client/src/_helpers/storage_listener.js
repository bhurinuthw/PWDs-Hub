export function applyStorageListener(store) {
  window.addEventListener('storage', createStorageListener(store));
}

function createStorageListener(store) {
  return event => {
    // to receive event save form from another tab
    if (event.key === 'newFormAdded') {
      const action = JSON.parse(event.newValue);
      store.dispatch(action);
    }
  }
}

