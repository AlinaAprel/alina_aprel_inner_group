function tagObjectModel(line) {
  let regExpSrc = line.match(/\.\/[a-z]+\/?([a-z]+)?\/.[a-z]+\.(png|jpeg|jpg|svg|gif)/);
  let regExpHref = line.match(/\.\/[a-z]+\.(js|css|html)/);

  return {
	name: line.match(/[a-z]+/)[0],
	isPair: line.match(/<\//) ? true : false,
	class: line.match(/class="[a-z]+/) ? line.match(/class="[a-z]+/)[0].split('"')[1] : "",
	id: line.match(/id="[a-z]+/) ? line.match(/id="[a-z]+/)[0].split('"')[1] : "",
	src: regExpSrc ? regExpSrc[0] : "",
	alt: line.match(/alt="[a-z]+/) ? line.match(/alt="[a-z]+/)[0].split('"')[1] : "",
	content: line.match(/>[a-z]+/) ? line.match(/>[a-z]+/)[0].split(">")[1] : "",
	type: line.match(/type="[a-z]+/) ? line.match(/type="[a-z]+/)[0].split('"')[1] : "",
	href: regExpHref ? regExpHref[0]: "",
  }
}
