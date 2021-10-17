/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let username = prompt ("Who's there?", '');
if (userName === 'Admin') {

      let pass = prompt('Password?', '');
    
      if (pass === 'TheMaster') {
        alert( 'Welcome!' );
      } else if (pass === '' || pass === null) {
        alert( 'Canceled' );
      } else {
        alert( 'Wrong password' );
      }
    
    } else if (userName === '' || userName === null) {
      alert( 'Canceled' );
    } else {
      alert( "I don't know you" );
    }