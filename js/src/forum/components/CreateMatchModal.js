import app from 'flarum/forum/app';

import Button from 'flarum/common/components/Button';
import Modal from 'flarum/common/components/Modal';
import Switch from 'flarum/common/components/Switch';
import Stream from 'flarum/common/utils/Stream';

export default class CreateMatchModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);
  }

  title() {
    return '交坛·添加拼车匹配';
  }

  className() {
    return 'MatchDiscussionModal Modal--small';
  }

  configDatePicker(vnode) {
  }

  content() {
    return [
      <div className="Modal-body">
        <div className="MatchDiscussionModal-form">
          <div className="Form-group">
            <label className="label">{'出发地点'}</label>
            <span class='select'>
              <select class="Select-input FormControl">
                <option value='xm'>交大西门</option>
                <option value='tf'>天府国际机场</option>
                <option value='sl'>双流国际机场</option>
                <option value='dz'>成都东站</option>
                <option value='nz'>成都南站</option>
              </select>
            </span>
            <label className="label">{'到达地点'}</label>
            <span class='select'>
              <select class="Select-input FormControl">
                <option value='xm'>交大西门</option>
                <option value='tf'>天府国际机场</option>
                <option value='sl'>双流国际机场</option>
                <option value='dz'>成都东站</option>
                <option value='nz'>成都南站</option>
              </select>
            </span>
            <label className="label">{'最长可等待 [单位：分钟,只填数字,最多720]'}</label>
            <input type="text" class="FormControl" ></input>
          </div>

          <div className="Form-group">
            <label className="label">{'以下信息为非必填项'}</label>
            <label className="label">{'你的性别'}</label>
            <span class='select'>
              <select class="Select-input FormControl">
                <option value='boy'>男</option>
                <option value='girl'>女</option>
              </select>
            </span>
            <label className="label">{'你的学院'}</label>
            <input type="text" class="FormControl" ></input>
          </div>

          <div className="Form-group">
            {Button.component(
              {
                type: 'submit',
                className: 'Button Button--primary MatchModal-SubmitButton',
                loading: this.loading,
              },
              '开始匹配'
            )}
          </div>
        </div>
      </div>
    ]
  }

  onsubmit(e) {
    e.preventDefault();
  }
}
