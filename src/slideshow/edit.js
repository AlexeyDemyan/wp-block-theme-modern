import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div style={{ backgroundColor: '#333', padding: '35px' }}>
        <p style={{ textAlign: 'center', fontSize: '20px', color: '#FFF' }}>
          Slideshow
        </p>
        <InnerBlocks allowedBlocks={['customblocktheme/slide']} />
      </div>
    </div>
  );
}
