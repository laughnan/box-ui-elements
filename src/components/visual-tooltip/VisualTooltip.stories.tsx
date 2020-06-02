import * as React from 'react';

import Button, { ButtonType } from '../button/Button';

import testImageSrc from './getTestImageSrc';
import VisualTooltip from './VisualTooltip';
import notes from './VisualTooltip.stories.md';

export const basic = () => (
    <div style={{ textAlign: 'center' }}>
        <VisualTooltip
            content="Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut at semper nisl."
            image={<img src={testImageSrc} alt="Lorem ipsum dolor" />}
            isShown
            title="Lorem ipsum dolor"
        >
            <Button type={ButtonType.BUTTON}>Callout</Button>
        </VisualTooltip>
    </div>
);

export default {
    title: 'Components|VisualTooltip',
    component: VisualTooltip,
    parameters: {
        notes,
    },
};
