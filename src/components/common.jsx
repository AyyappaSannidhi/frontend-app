
export const makeTextBold = (textsArray) => {
    return textsArray.map((text, index) => {
      const parts = text.split(/(\*[^*]+\*)/);
  
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