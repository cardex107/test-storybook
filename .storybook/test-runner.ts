import type { TestRunnerConfig } from '@storybook/test-runner';

const exclude = ['components/User/DefaultPhotoGuidance', 'components/User/DermaV2PhotoGuidance'];

const config: TestRunnerConfig = {
    async postVisit(page, context) {
        if (exclude.includes(context.title)) {
            return;
        }
        // the #storybook-root element wraps the story. In Storybook 6.x, the selector is #root
        const elementHandler = await page.$('#storybook-root');
        const innerHTML = await elementHandler!.innerHTML();
        expect(innerHTML).toMatchSnapshot();
    },
};

export default config;
