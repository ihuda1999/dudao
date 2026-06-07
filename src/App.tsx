/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionCard } from './components/ActionCard';
import { FileText, BarChart3 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="max-w-2xl mx-auto space-y-4">
        <ActionCard
          title="督办工单创建"
          icon={<FileText className="w-6 h-6" />}
          url="https://rcnaykbqfdqi.feishu.cn/share/base/form/shrcnkW2JzWGgSwfw3eBvQGklOh"
          buttonText="点击创建"
        />

        <ActionCard
          title="工单数据查看"
          icon={<BarChart3 className="w-6 h-6" />}
          url="https://rcnaykbqfdqi.feishu.cn/wiki/AWGGwdWXkiwsdPkZ00IcRCT2npc?from=from_copylinkfa6c6f098c77381ee9131758de78c8ac"
          buttonText="点击查看"
        />
      </div>
    </div>
  );
}
