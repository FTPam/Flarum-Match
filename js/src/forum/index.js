import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';
import classList from 'flarum/common/utils/classList';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';

app.initializers.add('tpam/flarum-match', () => {
  export default () => {
    extend(DiscussionComposer.prototype, 'headerItems', function (items) {
      items.add(
        'polls',
        <a className="DiscussionComposer-match" onclick={console.log('a')}>
          <span className={classList('PollLabel', !this.poll && 'none')}>
            {'发起拼车匹配'}
          </span>
        </a>,
        2
        );
    });
  }
});
