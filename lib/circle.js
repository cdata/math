define(['math/vector2'],
       function(Vector2) {
  'use strict';

  function Circle(radius, position) {
    this.position = position || new Vector2();
    this.radius = radius || 0;
  }

  return Circle;
});
