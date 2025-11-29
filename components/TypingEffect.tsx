import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ 
  words, 
  speed = 100, 
  deleteSpeed = 50, 
  delay = 2000 
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? deleteSpeed : speed);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, speed, deleteSpeed, delay, typingSpeed]);

  return (
    <span className="border-b-2 border-primary pb-1 text-white">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect;