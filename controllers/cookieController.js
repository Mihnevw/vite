export const setCookie = (req, res) => {
    res.cookie('__myCookie', 'cookieValue', {
      sameSite: 'none',
      secure: true,
      httpOnly: true,
    });
    res.send('Cookie is set');
  };
  