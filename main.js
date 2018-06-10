document.addEventListener('DOMContentLoaded', function() {
  
  let navElems = document.querySelectorAll('.sidenav');
  let navInstances = M.Sidenav.init(navElems, {draggable: true});

  let spyElems = document.querySelectorAll('.scrollspy');
  let spyInstances = M.ScrollSpy.init(spyElems, {scrollOffset: 50});

});