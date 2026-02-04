import { ConnectionForm } from '@/components/ServerSettings/ConnectionForm';
import { ServerStatus } from '@/components/ServerSettings/ServerStatus';
import { UpdateStatus } from '@/components/ServerSettings/UpdateStatus';
import { usePlatform } from '@/platform/PlatformContext';

export function ServerTab() {
  const platform = usePlatform();
  return (
    <div className="space-y-4 overflow-y-auto flex flex-col">
      <div className="grid gap-4 md:grid-cols-2">
        <ConnectionForm />
        <ServerStatus />
      </div>
      {platform.metadata.isTauri && <UpdateStatus />}
    </div>
  );
}
