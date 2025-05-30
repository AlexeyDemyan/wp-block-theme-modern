import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import {
  RichText,
  BlockControls,
  useBlockProps,
} from '@wordpress/block-editor';

export default function Edit(props) {
  const blockProps = useBlockProps();

  function handleTextChange(value) {
    props.setAttributes({ text: value });
  }

  return (
    <div {...blockProps}>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            isPressed={props.attributes.size == 'large'}
            onClick={() => {
              props.setAttributes({ size: 'large' });
            }}
          >
            Large
          </ToolbarButton>
          <ToolbarButton
            isPressed={props.attributes.size == 'medium'}
            onClick={() => {
              props.setAttributes({ size: 'medium' });
            }}
          >
            Medium
          </ToolbarButton>
          <ToolbarButton
            isPressed={props.attributes.size == 'small'}
            onClick={() => {
              props.setAttributes({ size: 'small' });
            }}
          >
            Small
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
      <RichText
        // allowedFormats can be left an empty array to allow nothing
        allowedFormats={['core/bold']}
        tagName='h1'
        className={`headline headline--${props.attributes.size}`}
        value={props.attributes.text}
        onChange={handleTextChange}
      />
    </div>
  );
}
