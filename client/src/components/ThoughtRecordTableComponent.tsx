const ThoughtRecordTableComponent = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Situation</th>
          <th>Moods</th>
          <th>Automatic Thoughts</th>
          <th>Evidence For</th>
          <th>Evidence Against</th>
          <th>Alternative/Balanced Thoughts</th>
          <th>New Mood Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <textarea placeholder="Who were you with? What were you doing? When was it? Where were you?" />
          </td>
          <td>
            <textarea placeholder="Describe each mood in one word. Rate intensity of mood (0-100%). Circle or mark the mood you want to examine." />
          </td>
          <td>
            <textarea placeholder="Answer one or both of the questions below, and then some or all of the questions (on p. 54) specific to the mood you circled or marked: What was going through my mind just before I started to feel this way? What images or memories do I have in this situation?" />
          </td>
          <td>
            <textarea placeholder="Circle hot thought in previous column for which you are or marked: looking for evidence. Write factual evidence to support this conclusion. (Try to write facts, not interpretations, as you practiced in Worksheet 8.1 on p. 72.)" />
          </td>
          <td>
            <textarea placeholder="Ask yourself the questions in the Helpful Hints (p. 75) to help discover evidence that does not support your hot thought." />
          </td>
          <td>
            <textarea placeholder="Ask yourself the questions in the Helpful Hints in Chapter 9 (p. 100) to generate alternative. or balanced thoughts. Write an alternative or balanced thought. Rate how much you believe each (0-100%), as alternative or balanced thought well as any (0-100%)." />
          </td>
          <td>
            <textarea placeholder="Copy the moods from column 2. Rerate the intensity of each mood (0-100%), as well as any new moods." />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default ThoughtRecordTableComponent;
