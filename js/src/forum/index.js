import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';
import classList from 'flarum/common/utils/classList';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import TextEditor from 'flarum/components/TextEditor';
import TextEditorButton from 'flarum/components/TextEditorButton';

import CreateMatchModal from './components/CreateMatchModal';

app.initializers.add('tpam/flarum-match', () => {
  DiscussionComposer.prototype.addMatch = function () {
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

  extend(TextEditor.prototype, 'toolbarItems', function(items) {
    items.add('mention', (
      <TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor(' test')} icon="fas fa-at">
        {app.translator.trans('flarum-mentions.forum.composer.mention_tooltip')}
      </TextEditorButton>
    ));
  })
});
