const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  
  //creating div class of header
  const div = document.createElement('div');
  div.setAttribute('class', 'header');

  //creating span class of date with text of date
  const span1 = document.createElement('span');
  span1.setAttribute('class', 'date');
  span1.textContent = date;

  //creating h1 with text of title
  const h1 = document.createElement('h1');
  h1.textContent = title;

  //creating another span class of temp with text of temp
  const span2 = document.createElement('span');
  span2.setAttribute('class', 'temp');
  span2.textContent = temp;

  //adding span1, h1, span2 into the div
  div.appendChild(span1);
  div.appendChild(h1);
  div.appendChild(span2);

  
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

}

export { Header, headerAppender }
