const byteSize = (str) => {
  // write your code hedr
	const encoder = new TextEncoder();

  // Encode the string into a Uint8Array (UTF-8 bytes)
  const bytes = encoder.encode(str);

  // Return the length of the byte array
  return bytes.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
