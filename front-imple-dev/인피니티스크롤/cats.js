var cats = ['dave', 'henry', 'martha'];
// exports.cat = cats;
function wow(){
  return 'wow'
}
const name = 'square';
// exports.cats = cats
// export default cats;
// export const name = 'square';

// export 

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}


export { name , wow};