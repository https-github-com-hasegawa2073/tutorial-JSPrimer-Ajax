const userId = 'hasegawa2073';
fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`).then(
  (response) => {
    console.log(response.status);
    return response.json().then((userInfo) => {
      // JSONパースされたオブジェクトが渡される
      console.log(userInfo);
    });
  }
);
