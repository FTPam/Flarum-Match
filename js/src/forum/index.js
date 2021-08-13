import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';
import classList from 'flarum/common/utils/classList';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';

app.initializers.add('tpam/flarum-match', () => {
  DiscussionComposer.prototype.addPoll = function () {
    app.modal.show(CreatePollModal, {
      poll: this.poll,
      onsubmit: (poll) => (this.poll = poll),
    });
  };

    extend(DiscussionComposer.prototype, 'headerItems', function (items) {
      items.add(
        'match',
        <a className="DiscussionComposer-match" onclick={console.log('a')}>
          <span className={classList('MatchLabel', !this.poll && 'none')}>
            {'发起拼车匹配'}
          </span>
        </a>,
        2
        );
    });
});
