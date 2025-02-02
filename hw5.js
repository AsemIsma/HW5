function useLoginAndPassword (login, password) {
  if (login === 'correct' && password === 'correct') {
    console.log('you are logged in');
  } else if (login === 'correct' && password !== 'correct') {
    console.log('your password is wrong');
  } else if (login !== 'correct' && password === 'correct') {
    console.log('Your login is wrong');
  } else {
    console.log('both inputs are wrong');
  }
}

useLoginAndPassword('correct', 'correct')
useLoginAndPassword('incorrect', 'correct')
useLoginAndPassword('correct', 'incorrect')
useLoginAndPassword('incorrect', 'incorrect')