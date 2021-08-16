import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';
import {override} from 'flarum/common/extend'

import classList from 'flarum/common/utils/classList';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import TextEditor from 'flarum/components/TextEditor';
import TextEditorButton from 'flarum/components/TextEditorButton';
import CreateMatchModal from './components/CreateMatchModal';

app.initializers.add('tpam/flarum-match', () => {
  DiscussionComposer.prototype.addMatch = function () {
    const regex = new RegExp('^[0-9a-zA-Z_-].+@my.swjtu.edu\\.cn$');
    if(!regex.test(app.session.user.email())){
      window.alert('使用此功能，你需要先完成交大学生认证')
      return;
    }
    app.modal.show(CreateMatchModal, {
      poll: this.poll,
      onsubmit: (poll) => (this.poll = poll),
    });
  };

  extend(DiscussionComposer.prototype, 'headerItems', function (items) {
    items.add(
      'match',
      <a className="DiscussionComposer-match" onclick={this.addMatch.bind(this)}>
        <span className={classList('MatchLabel', !this.poll && 'none')}>
          {'发起拼车匹配'}
        </span>
      </a>,
      2
    );
  });
});
