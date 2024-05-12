import { memo } from 'react';
import AceEditor, { IMarker } from 'react-ace';
import 'brace/mode/ruby';
import 'brace/theme/xcode';

const markers: IMarker[] = [
  {
    startRow: 3,
    startCol: 1,
    endRow: 4,
    endCol: 1,
    className: 'ruby-editor',
    type: 'text',
    inFront: true,
  },
];

type Props = {
  code: string;
  setCode: (arg0: string) => void;
};
export const AceRubyEditor = memo<Props>((props) => {
  const handleChange = (value: string) => {
    props.setCode(value);
  };

  return (
    <>
      <style>
        {`
          .ace_gutter {
            background: #0b6bcb2c !important; /* 新しいgutterの背景色 */
          }
      `}
      </style>
      <AceEditor
        mode="ruby"
        theme="xcode"
        onChange={handleChange}
        width="100%"
        name="ace-editor"
        editorProps={{ $blockScrolling: false }}
        value={props.code}
        showGutter={true}
        highlightActiveLine={true}
        showPrintMargin={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{
          width: '100%',
          height: '70svh',
          border: '1px solid #ddd',
          borderRadius: '8px',
        }}
        markers={markers}
      />
    </>
  );
});
