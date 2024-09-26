function moveToNext(current, nextFieldId) {
    if (current.value.length === 1 && nextFieldId !== "") {
      document.getElementById(nextFieldId).focus();
    }
  }
  
  function moveToPrev(event, currentFieldId, prevFieldId) {
    if (event.key === 'Backspace' && document.getElementById(currentFieldId).value === '' && prevFieldId !== '') {
      document.getElementById(prevFieldId).focus();
    }
  }
  