import './style.css';
import loadShows from './loadShow';
import { addNewLike, countLikes, likeUpdate } from './Likes';
import commentsPopUp from './commentsPopup';
import countShows from './showsCounter';

loadShows().then((value) => {
  const likesButtons = document.querySelectorAll('.like');
  likesButtons.forEach((show) => {
    show.addEventListener('click', () => {
      const id = show.parentElement.parentElement.children[3].innerHTML;
      const likes = parseInt(countLikes(id), 10) + 1;
      show.parentElement.parentElement.children[2].children[1].innerHTML = `${likes} likes`;
      addNewLike(id);
      likeUpdate(id, likes);
    });
  });

  const commentsButtons = document.querySelectorAll('.comments');
  commentsButtons.forEach((show) => {
    show.addEventListener('click', () => {
      const id = show.parentElement.children[3].innerHTML;
      commentsPopUp(value, id);
    });
  });
  document.querySelector('#counter').innerHTML = `(${countShows(value)})`;
});
