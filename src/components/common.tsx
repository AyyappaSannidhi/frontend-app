export const makeTextBold = (textsArray: any) => {
  // If textsArray is a string, wrap it in an array so the logic works
  if (typeof textsArray === 'string') {
    const text = textsArray; // Directly use the string
    return (
      <p>
        {text.startsWith("*") && text.endsWith("*") ? (
          <strong>{text.slice(1, -1)}</strong>
        ) : (
          text
        )}
      </p>
    );
  }

  // If textsArray is an array of strings, process each string
  return textsArray.map((text : string, index : number) => {
    const parts: string[] = text.split(/(\*[^*]+\*)/); // Split based on *bold* text

    return (
      <p key={index}>
        {parts.map((part, partIndex) =>
          part.startsWith("*") && part.endsWith("*") ? (
            <strong key={partIndex}>{part.slice(1, -1)}</strong>
          ) : (
            part
          )
        )}
      </p>
    );
  });
};